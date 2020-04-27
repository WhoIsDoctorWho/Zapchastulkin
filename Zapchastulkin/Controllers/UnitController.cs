using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public IActionResult Delete(int id)
        {
            throw new System.NotImplementedException();
            return Ok();
        }
    }
}