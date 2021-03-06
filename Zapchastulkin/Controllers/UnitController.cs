﻿using Microsoft.AspNetCore.Mvc;
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
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Unit>>> Get()
        {
            return Ok(await db.Units.ToListAsync());
        }
        [HttpGet("{unitId}")]
        public async Task<ActionResult<IEnumerable<Product>>> Get(int unitId)
        {
            Unit unit = await db.Units
                .Include(unit => unit.Products)
                .FirstOrDefaultAsync(unit => unit.Id == unitId);
            if (unit == null)
                NotFound();
            return Ok(unit);
        }
        [HttpPost]
        public async Task<IActionResult> Post(Unit unit)
        {            
            if (ModelState.IsValid)
            {
                Category category = await db.Categories.FirstOrDefaultAsync(category => category.Id == unit.CategoryId);
                if (category != null)
                {
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
                db.Update(unit);
                await db.SaveChangesAsync();
                return Ok(unit);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await db.DeleteUnitAsync(id);
            return Ok();
        }
    }
}