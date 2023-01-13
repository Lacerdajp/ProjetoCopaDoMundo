using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APIProjetoCopaDoMundo.Model;
using System.Text.Json.Nodes;
using Newtonsoft.Json;

namespace APIProjetoCopaDoMundo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FinalsController : ControllerBase
    {
        private readonly Context _context;

        public FinalsController(Context context)
        {
            _context = context;
        }

        // GET: api/Finals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Final>>> GetFinal()
        {
            return await _context.Final.ToListAsync();
        }

        // GET: api/Finals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Final>> GetFinal(int id)
        {
            var final = await _context.Final.FindAsync(id);

            if (final == null)
            {
                return NotFound();
            }

            return final;
        }

        // PUT: api/Finals/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFinal(int id, Final final)
        {
            if (id != final.Id)
            {
                return BadRequest();
            }

            _context.Entry(final).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FinalExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Finals
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Final>> PostFinal([FromBody] JsonObject tudo)
        {
            int id;
            dynamic obj=JsonConvert.DeserializeObject<dynamic>(tudo.ToString());
            string equipeA=obj.equipeA;
            string equipeB=obj.equipeB;
            int golsEquipeA=obj.golsEquipeA;
            int golsEquipeB=obj.golsEquipeB;
            int golsPenaltyEquipeA = obj.golsPenaltyEquipeA;
            int golsPenaltyEquipeB=obj.golsPenaltyEquipeB;
            //string equipeA,string equipeB,int golsEquipeA,int golsEquipeB,int golsPenaltyEquipeA,int golsPenaltyEquipeB
            do
            {
                id = new Random().Next(1000);
                if (!FinalExists(id))
                {
                    break;
                }
            } while (id>0);
            
            var selecaoA = await new SelecaosController(_context).GetSelecaoToken(equipeA);
            var selecaoB = await new SelecaosController(_context).GetSelecaoToken(equipeB);
            string nomeEquipeA = selecaoA.Value.Nome;
            string nomeEquipeB = selecaoB.Value.Nome;
            Final final = new Final(id, nomeEquipeA, nomeEquipeB, equipeA, equipeB, golsEquipeA, golsEquipeB, golsPenaltyEquipeA, golsPenaltyEquipeB, DateTime.Now);

            _context.Final.Add(final);
            await _context.SaveChangesAsync();
            await new VencedorsController(_context).PostVencedor(final);
            return CreatedAtAction("GetFinal", new { id = final.Id }, final);
        }

        // DELETE: api/Finals/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFinal(int id)
        {
            var final = await _context.Final.FindAsync(id);
            if (final == null)
            {
                return NotFound();
            }

            _context.Final.Remove(final);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FinalExists(int id)
        {
            return _context.Final.Any(e => e.Id == id);
        }
    }
}
