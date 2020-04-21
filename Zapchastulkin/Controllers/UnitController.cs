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
    public class UnitController : Controller
    {
        ApplicationContext db;
        public UnitController(ApplicationContext context)
        {
            db = context;
        }
        [HttpGet]
        public IEnumerable<Unit> Get()
        {
            return db.Units.ToList();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Unit>>> Get(int id)
        {
            var units = await db.Categories
                .Where(x => x.Id == id)
                .Select(x => x.Units)
                .ToListAsync();
            if (units != null && units.Count != 0)
                return new ObjectResult(units);
            return NotFound();                
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