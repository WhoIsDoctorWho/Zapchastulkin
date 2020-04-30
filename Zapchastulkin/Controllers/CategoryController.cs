using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zapchastulkin.Models;

namespace Zapchastulkin.Controllers
{
    [ApiController]
    [Route("api/categories")]
    public class CategoryController : Controller
    {
        ApplicationContext db;
        public CategoryController(ApplicationContext context)
        {
            db = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> Get()
        {
            return Ok(await db.Categories.ToListAsync());
        }
        [HttpGet("{categoryId}")]
        public async Task<ActionResult<IEnumerable<Unit>>> Get(int categoryId)
        {
            var units = (await db.Categories.FirstOrDefaultAsync(x => x.Id == categoryId))?.Units;
            if (units == null || !units.Any())
                units = await db.Units.ToListAsync();
            return Ok(units);
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
                db.Categories.Add(category);
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