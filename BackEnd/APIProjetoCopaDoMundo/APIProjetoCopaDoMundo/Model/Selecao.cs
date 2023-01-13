using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace APIProjetoCopaDoMundo.Model
{
    [PrimaryKey(nameof(Token),nameof(Nome))]
    public class Selecao
    {
       
        [StringLength(50)]
        [NotNull]
        public string  Token { get; }
        [StringLength(100)]
        [NotNull]
        public string Nome { get;  }

    }
}
