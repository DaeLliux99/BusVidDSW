using System;
using System.Collections.Generic;
using System.Text;

namespace BusVidAPI.Modelos.Core
{
    public class Administrador
    {
        public int Id { get; set; }
        public string Dni { get; set; }
        public string Password { get; set; }
        public string PasswordText { get; set; }
        public string Nombre { get; set; }
        public string Salt { get; set; }
    }
}
