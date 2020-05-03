using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using Zapchastulkin.Models;

namespace Zapchastulkin.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/categories")]
    public class CategoryController : Controller
    {
        ApplicationContext db;
        public CategoryController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Category>>> Get()
        {
            return Ok(await db.Categories.ToListAsync());
        }
        [HttpGet("{categoryId}")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Unit>>> Get(int categoryId)
        {            
             Category category = await db.Categories
                .Include(category => category.Units)
                .FirstOrDefaultAsync(x => x.Id == categoryId);
            if (category == null)
                return NotFound();
            return Ok(category);
        }
        [HttpPost]
        public async Task<ActionResult> Post(Category category)
        {
            if (ModelState.IsValid)
            {                
                db.Categories.Add(category);
                await db.SaveChangesAsync();
                return Ok(category);
            }
            return BadRequest(ModelState);
        }
        [HttpPut]
        public async Task<ActionResult> Put(Category category)
        {
            if (ModelState.IsValid)
            {                
                db.Update(category);
                await db.SaveChangesAsync();
                return Ok(category);
            }
            return BadRequest(ModelState);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await db.DeleteCategoryAsync(id);
            return Ok();
        }
    }
}