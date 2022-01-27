using System;
using System.Collections.Generic;
using System.Text;

namespace BusVidAPI.Modelos.Core
{
    public class Pasaje
    {
        public int Id { get; set; }
        public int IdViaje { get; set; }
        public int IdPasajero { get; set; }
        public string Dni { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public int Cantidad { get; set; }
    }
}
