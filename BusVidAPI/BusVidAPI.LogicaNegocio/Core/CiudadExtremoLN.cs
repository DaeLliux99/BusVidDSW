using BusVidAPI.AccesoDatos.Core;
using BusVidAPI.Modelos.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusVidAPI.LogicaNegocio.Core
{
    public class CiudadExtremoLN
    {
        public CiudadExtremo InsertarCiudadExtremo(CiudadExtremo ce)
        {
            try
            {
                return new CiudadExtremoDA().InsertarCiudadExtremo(ce);
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
