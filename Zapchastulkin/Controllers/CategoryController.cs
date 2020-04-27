using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
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
            return await db.Categories.ToListAsync();
        }
        [HttpGet("{categoryId}")]
        public async Task<ActionResult<IEnumerable<Unit>>> Get(int categoryId)
        {
            var units = (await db.Categories.FirstAsync(x => x.Id == categoryId)).Units;
            if (units == null || units.Count == 0)
                units = await db.Units.ToListAsync();
            return Ok(units);
        }
        [HttpPost]
        public IActionResult Post(Category category)
        {
            throw new System.NotImplementedException();
            if (ModelState.IsValid)
            {
                return Ok();
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Category category)
        {
            throw new System.NotImplementedException();
            if (ModelState.IsValid)
            {
                return Ok();
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await db.DeleteCategory(id);
            return Ok();
        }
    }
}