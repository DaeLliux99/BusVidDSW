using BusVidAPI.Modelos.Core;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace BusVidAPI.AccesoDatos.Core
{
    public class BusDA
    {
        string conf = "Server=DESKTOP-4JKICP9;Database=busVidDB;User Id=sa;Password=123;";
        private Bus LlenarEntidad(IDataReader reader)
        {
            Bus bus = new Bus();
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'idBus'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["idBus"]))
                    bus.Id = Convert.ToInt32(reader["idBus"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'nroPlaca'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["nroPlaca"]))
                    bus.NroPlaca = Convert.ToString(reader["nroPlaca"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'marca'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["marca"]))
                    bus.Marca = Convert.ToString(reader["marca"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'modelo'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["modelo"]))
                    bus.Modelo = Convert.ToString(reader["modelo"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'nroAsientos'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["nroAsientos"]))
                    bus.NroAsientos = Convert.ToInt32(reader["nroAsientos"]);
            }
            return bus;
        }

        public List<Bus> ListarBuses()
        {
            List<Bus> buses = new List<Bus>();
            Bus entidad = null;
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paBus_Listar", conexion))
                {
                    comando.CommandType = CommandType.StoredProcedure;
                    conexion.Open();
                    SqlDataReader reader = comando.ExecuteReader();
                    while (reader.Read())
                    {
                        entidad = LlenarEntidad(reader);
                        buses.Add(entidad);
                    }
                }
                conexion.Close();
            }
            return buses;
        }
    }
}
