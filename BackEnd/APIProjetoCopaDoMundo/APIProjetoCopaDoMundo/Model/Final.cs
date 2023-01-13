using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace APIProjetoCopaDoMundo.Model
{
    public class Final
    {
        public int Id { get; set; }

        [StringLength(100)]
        [NotNull]
        public string EquipeA { get; set; }
        [StringLength(100)]
        [NotNull]
        public string EquipeB { get; set; }
        [StringLength(50)]
        [NotNull]
        public string TokenA { get; set; }
        [StringLength(50)]
        [NotNull]
        public string TokenB { get; set; }
        [NotNull]
        public int GolsEquipeA { get; set; }
        [NotNull]
        public int GolsEquipeB { get; set; }
        [NotNull]
        public int GolsPenaltyEquipeA { get; set; }
        [NotNull]
        public int GolsPenaltyEquipeB { get; set; }

        public DateTime Data { get; set; }

        public Final(int id, string equipeA, string equipeB, string tokenA, string tokenB, int golsEquipeA, int golsEquipeB, int golsPenaltyEquipeA, int golsPenaltyEquipeB, DateTime data)
        {
            Id = id;
            EquipeA = equipeA;
            EquipeB = equipeB;
            TokenA = tokenA;
            TokenB = tokenB;
            GolsEquipeA = golsEquipeA;
            GolsEquipeB = golsEquipeB;
            GolsPenaltyEquipeA = golsPenaltyEquipeA;
            GolsPenaltyEquipeB = golsPenaltyEquipeB;
            Data = data;
        }
    }
}
