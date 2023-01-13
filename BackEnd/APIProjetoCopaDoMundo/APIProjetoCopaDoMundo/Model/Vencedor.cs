using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Diagnostics.CodeAnalysis;

namespace APIProjetoCopaDoMundo.Model
{
    [PrimaryKey(nameof(Id))]
    public class Vencedor
    {
        
        public int Id { get; set; }
        [StringLength(50)]
        [NotNull]
        public string Token { get; set; }
        [StringLength(100)]
        [NotNull]
        public string Nome { get; set; }
        [NotNull]
        public DateTime Data { get; set; }

        public Vencedor(int id, string token, string nome, DateTime data)
        {
            Id = id;
            Token = token;
            Nome = nome;
            Data = data;
        }
    }
}

