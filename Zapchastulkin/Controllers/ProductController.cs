using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
                db.Products.Add(product);
                await db.SaveChangesAsync();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public async Task<ActionResult> Put(Product product)
        {
            if (ModelState.IsValid)
            {                
                db.Products.Update(product);
                await db.SaveChangesAsync();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await db.DeleteProduct(id);
            return Ok();
        }
    }
}