using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        [HttpGet("{id}")]
        public IActionResult Get(int cid)
        {
            return RedirectToRoutePermanent("~/api/units", new { id = cid });
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