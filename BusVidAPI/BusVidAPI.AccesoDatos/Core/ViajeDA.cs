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
    public class ViajeDA
    {
        string conf = "Server=localhost;Database=busVidDB;User Id=sa;Password='qwerQWER1234!';";
        private Viaje LlenarEntidad(IDataReader reader)
        {
            Viaje viaje = new Viaje();
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'idViaje'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["idViaje"]))
                    viaje.Id = Convert.ToInt32(reader["idViaje"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'fecha'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["fecha"]))
                    viaje.Fecha = Convert.ToDateTime(reader["fecha"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'horaInicio'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["horaInicio"]))
                    viaje.HoraInicio = TimeSpan.Parse(Convert.ToString(reader["horaInicio"]));
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'nroAsientosDisp'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["nroAsientosDisp"]))
                    viaje.NroAsientosDisp = Convert.ToInt32(reader["nroAsientosDisp"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'precio'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["precio"]))
                    viaje.Precio = Convert.ToDecimal(reader["precio"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'idBus'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["idBus"]))
                    viaje.IdBus = Convert.ToInt32(reader["idBus"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'nroPlaca'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["nroPlaca"]))
                    viaje.NroPlaca = Convert.ToString(reader["nroPlaca"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'idAdministrador'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["idAdministrador"]))
                    viaje.IdAdministrador = Convert.ToInt32(reader["idAdministrador"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'nombre'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["nombre"]))
                    viaje.Nombre = Convert.ToString(reader["nombre"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'inicio'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["inicio"]))
                    viaje.Inicio = Convert.ToString(reader["inicio"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'destino'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["destino"]))
                    viaje.Destino = Convert.ToString(reader["destino"]);
            }
            return viaje;
        }
        public List<Viaje> ListarViajes()
        {
            List<Viaje> listaEntidad = new List<Viaje>();
            Viaje entidad = null;
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paViaje_Listar", conexion))
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

        public Viaje ObtenerViaje(int idViaje)
        {
            Viaje viaje = null;
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paViaje_Obtener", conexion))
                {
                    comando.CommandType = CommandType.StoredProcedure;
                    comando.Parameters.AddWithValue("@idViaje", idViaje);
                    conexion.Open();
                    SqlDataReader reader = comando.ExecuteReader();
                    while (reader.Read())
                    {
                        viaje = LlenarEntidad(reader);
                    }
                    conexion.Close();
                }
            }
            return viaje;
        }
        public Viaje InsertarViaje(Viaje viaje)
        {
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paViaje_Insertar", conexion))
                {
                    comando.CommandType = System.Data.CommandType.StoredProcedure;
                    comando.Parameters.AddWithValue("@fecha", viaje.Fecha);
                    comando.Parameters.AddWithValue("@horaInicio", viaje.HoraInicio);
                    comando.Parameters.AddWithValue("@nroAsientosDisp", viaje.NroAsientosDisp);
                    comando.Parameters.AddWithValue("@precio", viaje.Precio);
                    comando.Parameters.AddWithValue("@idBus", viaje.IdBus);
                    comando.Parameters.AddWithValue("@idAdministrador", viaje.IdAdministrador);
                    conexion.Open();
                    viaje.Id = Convert.ToInt32(comando.ExecuteScalar());
                    conexion.Close();
                }
            }
            return viaje;
        }
        public Viaje ModificarViaje(Viaje viaje, int cantidad)
        {
            Viaje nuevoViaje = null;
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paViaje_Modificar", conexion))
                {
                    comando.CommandType = System.Data.CommandType.StoredProcedure;
                    comando.Parameters.AddWithValue("@idViaje", viaje.Id);
                    comando.Parameters.AddWithValue("@nroAsientosDisp", (viaje.NroAsientosDisp - cantidad));
                    conexion.Open();   
                    SqlDataReader reader = comando.ExecuteReader();
                    while (reader.Read())
                    {
                        nuevoViaje = LlenarEntidad(reader);
                    }
                    conexion.Close();
                }
            }
            return nuevoViaje;
        }
    }
}
