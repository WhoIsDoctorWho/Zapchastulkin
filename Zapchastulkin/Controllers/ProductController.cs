using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Product>>> Get([FromQuery] int unitId)
        //{
        //    var products = (await db.Units.FirstAsync(x => x.Id == unitId)).Products;
        //    if (products == null || products.Count == 0)
        //        products = await db.Products.ToListAsync();
        //    return Ok(products);
        //}

        [HttpGet("{productId}")]
        public async Task<ActionResult<Product>> Get(int productId)
        {
            return await db.Products.FirstAsync(x => x.Id == productId);
        }

        [HttpPost]
        public IActionResult Post(Product product)
        {
            if (ModelState.IsValid)
            {
                db.Products.Add(product);
                db.SaveChanges();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Product product)
        {
            if (ModelState.IsValid)
            {
                db.Update(product);
                db.SaveChanges();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Product product = db.Products.FirstOrDefault(x => x.Id == id);
            if (product != null)
            {
                db.Products.Remove(product);
                db.SaveChanges();
            }
            return Ok(product);
        }
    }
}