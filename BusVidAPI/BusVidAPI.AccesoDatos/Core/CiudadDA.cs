using BusVidAPI.Modelos.Core;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace BusVidAPI.AccesoDatos.Core
{
    public class CiudadDA
    {
        private string conf = "Server=DESKTOP-4JKICP9;Database=busVidDB;User Id=sa;Password=123;";
        private Ciudad LlenarEntidad(IDataReader reader)
        {
            Ciudad ciudad = new Ciudad();
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'idCiudad'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["idCiudad"]))
                    ciudad.Id = Convert.ToInt32(reader["idCiudad"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'nombre'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["nombre"]))
                    ciudad.Nombre = Convert.ToString(reader["nombre"]);
            }
            return ciudad;
        }
        public List<Ciudad> ObtenerCiudades()
        {
            List<Ciudad> listaEntidad = new List<Ciudad>();
            Ciudad entidad = null;
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paCiudad_Listar", conexion))
                {
                    comando.CommandType = CommandType.StoredProcedure;
                    conexion.Open();
                    SqlDataReader reader = comando.ExecuteReader();
                    while (reader.Read())
                    {
                        entidad = LlenarEntidad(reader);
                        listaEntidad.Add(entidad);
                    }
                }
                conexion.Close();
            }
            return listaEntidad;
        }
    }
}
