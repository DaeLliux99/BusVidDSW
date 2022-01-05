using BusVidAPI.Modelos.Core;
using System;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace BusVidAPI.AccesoDatos.Core
{
    public class CiudadExtremoDA
    {
        string conf = "Server=DESKTOP-4JKICP9;Database=busVidDB;User Id=sa;Password=123;";
        public CiudadExtremo InsertarCiudadExtremo(CiudadExtremo ce)
        {
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paCiudadExtremo_Insertar", conexion))
                {
                    comando.CommandType = System.Data.CommandType.StoredProcedure;
                    comando.Parameters.AddWithValue("@idCiudad", ce.IdCiudad);
                    comando.Parameters.AddWithValue("@idViaje", ce.IdViaje);
                    comando.Parameters.AddWithValue("@tipo", ce.Tipo);
                    conexion.Open();
                    ce.IdCiudad = Convert.ToInt32(comando.ExecuteScalar());
                    conexion.Close();
                }
            }
            return ce;
        }
    }
}
