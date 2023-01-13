using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;

namespace APIProjetoCopaDoMundo.Model
{
    public class Context: DbContext
    {

        public Context(DbContextOptions<Context> options) : base(options) { 
        }

        public DbSet<Selecao> Selecao { get; set; }
        public DbSet<Vencedor> Vencedor { get; set; }

        public DbSet<Final> Final { get; set; }

    }
}
