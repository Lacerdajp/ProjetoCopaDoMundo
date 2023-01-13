using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APIProjetoCopaDoMundo.Model;

namespace APIProjetoCopaDoMundo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VencedorsController : ControllerBase
    {
        private readonly Context _context;

        public VencedorsController(Context context)
        {
            _context = context;
        }

        // GET: api/Vencedors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vencedor>>> GetVencedor()
        {
            return await _context.Vencedor.ToListAsync();
        }

        // GET: api/Vencedors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vencedor>> GetVencedor(int id)
        {
            var vencedor = await _context.Vencedor.FindAsync(id);

            if (vencedor == null)
            {
                return NotFound();
            }

            return vencedor;
        }

        // PUT: api/Vencedors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutVencedor(int id, Vencedor vencedor)
        //{
        //    if (id != vencedor.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(vencedor).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!VencedorExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/Vencedors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Vencedor>> PostVencedor(Final final)
        {
            Vencedor vencedor;
            if (final.GolsEquipeA > final.GolsEquipeB || final.GolsPenaltyEquipeA > final.GolsPenaltyEquipeB)
            {
                vencedor = new Vencedor(final.Id, final.TokenA, final.EquipeA, final.Data);
                
            }
            else
            {
                vencedor = new Vencedor(final.Id, final.TokenB, final.EquipeB, final.Data);

            }
            _context.Vencedor.Add(vencedor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVencedor", new { id = vencedor.Id }, vencedor);
        }

        // DELETE: api/Vencedors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVencedor(int id)
        {
            var vencedor = await _context.Vencedor.FindAsync(id);
            if (vencedor == null)
            {
                return NotFound();
            }

            _context.Vencedor.Remove(vencedor);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VencedorExists(int id)
        {
            return _context.Vencedor.Any(e => e.Id == id);
        }
    }
}
