using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zapchastulkin.Models;

namespace Zapchastulkin.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : Controller
    {
        ApplicationContext db;
        public ProductController(ApplicationContext context)
        {
            db = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Get()
        {
            return Ok(await db.Products.ToListAsync());
        }
        [HttpGet("{productId}")]
        public async Task<ActionResult<Product>> Get(int productId)
        {
            return await db.Products.FirstAsync(x => x.Id == productId);
        }
        [HttpPost]
        public async Task<ActionResult> Post(Product product)
        {
            if (ModelState.IsValid)
            {
                Unit unit = await db.Units.FirstOrDefaultAsync(unit => unit.Id == product.UnitId);
                if (unit != null) {                    
                    db.Products.Add(product);
                    await db.SaveChangesAsync();
                    return Ok(product);
                }
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public async Task<ActionResult> Put(Product product)
        {
            if (ModelState.IsValid)
            {                
                db.Update(product);
                await db.SaveChangesAsync();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await db.DeleteProductAsync(id);
            return Ok();
        }
    }
}