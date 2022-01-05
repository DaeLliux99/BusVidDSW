using System;
using System.Collections.Generic;
using System.Text;

namespace BusVidAPI.Modelos.Core
{
    public class Bus
    {
        public int Id { get; set; }
        public string NroPlaca { get; set; }
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public int NroAsientos { get; set; }
    }
}
