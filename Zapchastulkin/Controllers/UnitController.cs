using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using Zapchastulkin.Models;

namespace Zapchastulkin.Controllers
{
    [ApiController]
    [Route("api/units")]
    public class UnitController : Controller
    {
        ApplicationContext db;
        public UnitController(ApplicationContext context)
        {
            db = context;
        }
        [HttpGet("{unitId}")]
        public async Task<ActionResult<IEnumerable<Product>>> Get(int unitId)
        {
            var products = (await db.Units.FirstAsync(x => x.Id == unitId)).Products;
            if (products == null || products.Count == 0)
                products = await db.Products.ToListAsync();
            return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Unit unit)
        {            
            if (ModelState.IsValid)
            {
                Category category = await db.Categories.FirstOrDefaultAsync(category => category.Name == "ss");
                if (category != null)
                {
                    category.Units.Add(unit);
                    db.Categories.Update(category);
                    db.Units.Add(unit);
                    await db.SaveChangesAsync();
                    return Ok(unit);
                }
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public async Task<ActionResult> Put(Unit unit)
        {
            if (ModelState.IsValid)
            {                
                db.Units.Update(unit);
                await db.SaveChangesAsync();
                return Ok(unit);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await db.DeleteUnit(id);
            return Ok();
        }
    }
}