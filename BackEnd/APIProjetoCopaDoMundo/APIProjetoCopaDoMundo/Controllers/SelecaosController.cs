using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APIProjetoCopaDoMundo.Model;
using Microsoft.AspNetCore.Cors;

namespace APIProjetoCopaDoMundo.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class SelecaosController : ControllerBase
    {
        private readonly Context _context;

        public SelecaosController(Context context)
        {
            _context = context;
        }

        // GET: api/Selecaos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Selecao>>> GetSelecao()
        {
            return await _context.Selecao.ToListAsync();
        }

        // GET: api/Selecaos/Nome/Brasil
        [HttpGet("Nome/{nome}")]
        public async Task<ActionResult<Selecao>> GetSelecao(string nome)
        {
            var selecoes=await _context.Selecao.ToListAsync();
            foreach (var selecao in selecoes)
            {
                if (selecao.Nome.ToLower() == nome.ToLower())
                {
                    return selecao;
                }

            }
                return NotFound();
            

          
        }
        // GET: api/Selecaos/Token/token
        [HttpGet("Token/{token}")]
        public async Task<ActionResult<Selecao>> GetSelecaoToken(string token)
        {
            var selecoes = await _context.Selecao.ToListAsync();
            foreach (var selecao in selecoes)
            {
                if (selecao.Token == token)
                {
                    return selecao;
                }

            }
            return NotFound();



        }

        // PUT: api/Selecaos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{nome}")]
        //public async Task<IActionResult> PutSelecao(string nome, Selecao selecao)
        //{
        //    if (nome != selecao.Nome)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(selecao).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!SelecaoExists(nome))
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



        private bool SelecaoExists(string id)
        {
            return _context.Selecao.Any(e => e.Nome == id);
        }
    }
}
