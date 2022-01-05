using System;
using System.Collections.Generic;
using System.Text;

namespace BusVidAPI.Modelos.Core
{
    public class Pasajero
    {
        public int Id { get; set; }
        public string Dni { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
    }
}
