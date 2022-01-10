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
    public class PasajeDA
    {
        string conf = "Server=localhost;Database=busVidDB;User Id=sa;Password='qwerQWER1234!';";
        public Pasaje InsertarPasaje(Pasaje pasaje)
        {
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paPasaje_Insertar", conexion))
                {
                    comando.CommandType = System.Data.CommandType.StoredProcedure;
                    comando.Parameters.AddWithValue("@idViaje", pasaje.IdViaje);
                    comando.Parameters.AddWithValue("@idPasajero", pasaje.IdPasajero);
                    conexion.Open();
                    pasaje.Id = Convert.ToInt32(comando.ExecuteScalar());
                    conexion.Close();
                }
            }
            return pasaje;
        }
    }
}
