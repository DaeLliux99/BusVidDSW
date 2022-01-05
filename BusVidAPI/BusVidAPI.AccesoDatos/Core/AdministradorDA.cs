using BusVidAPI.Modelos.Core;
using BusVidAPI.Utiles.Helpers;
using System;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace BusVidAPI.AccesoDatos.Core
{
    public class AdministradorDA
    {
        string conf = "Server=DESKTOP-4JKICP9;Database=busVidDB;User Id=sa;Password=123;";
        private Administrador LlenarEntidad(IDataReader reader)
        {
            Administrador admin = new Administrador();
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'idAdministrador'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["idAdministrador"]))
                    admin.Id = Convert.ToInt32(reader["idAdministrador"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'dni'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["dni"]))
                    admin.Dni = Convert.ToString(reader["dni"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'password'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["password"]))
                    admin.Password = Convert.ToString(reader["password"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'saltPassword'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["saltPassword"]))
                    admin.Salt = Convert.ToString(reader["saltPassword"]);
            }
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName = 'nombre'";
            if (reader.GetSchemaTable().DefaultView.Count.Equals(1))
            {
                if (!Convert.IsDBNull(reader["nombre"]))
                    admin.Nombre = Convert.ToString(reader["nombre"]);
            }
            return admin;
        }
        public List<Administrador> ListarAdmins()
        {
            List<Administrador> listaEntidad = new List<Administrador>();
            Administrador entidad = null;
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paListarAdministradores", conexion))
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

        public Administrador ObtenerAdmin(string dni, string passwordText)
        {
            Administrador admin = null;
            Administrador buscado = ObtenerAdmin(dni);
            if (buscado == null) return null;
            bool verifica = EncriptacionHelper.Verifica(passwordText, buscado.Salt, buscado.Password);
            if (!verifica) return null;
            return buscado;
            /*
            string password = EncriptacionHelper.Encripta(passwordText);
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paAdministrador_ObtenerAdmin", conexion))
                {
                    comando.CommandType = CommandType.StoredProcedure;
                    comando.Parameters.AddWithValue("@dni", dni);
                    comando.Parameters.AddWithValue("@password", password);
                    conexion.Open();
                    SqlDataReader reader = comando.ExecuteReader();
                    while (reader.Read())
                    {
                        admin = LlenarEntidad(reader);
                    }
                    conexion.Close();
                }
            }
            return admin;
            */
        }

        public Administrador ObtenerAdmin(string dni)
        {
            Administrador admin = null;
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paAdministrador_ObtenerXDni", conexion))
                {
                    comando.CommandType = CommandType.StoredProcedure;
                    comando.Parameters.AddWithValue("@dni", dni);
                    conexion.Open();
                    SqlDataReader reader = comando.ExecuteReader();
                    while (reader.Read())
                    {
                        admin = LlenarEntidad(reader);
                    }
                    conexion.Close();
                }
            }
            return admin;
        }

        public Administrador InsertarAdmin(Administrador admin)
        {
            HashSalt UserPass = EncriptacionHelper.Encripta(admin.PasswordText);
            admin.Password = UserPass.Hash;
            admin.Salt = UserPass.Salt;
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paAdministrador_insertar", conexion))
                {
                    comando.CommandType = System.Data.CommandType.StoredProcedure;
                    comando.Parameters.AddWithValue("@password", admin.Password);
                    comando.Parameters.AddWithValue("@dni", admin.Dni);
                    comando.Parameters.AddWithValue("@nombre", admin.Nombre);
                    comando.Parameters.AddWithValue("@saltPassword", admin.Salt);
                    conexion.Open();
                    admin.Id = Convert.ToInt32(comando.ExecuteScalar());
                    conexion.Close();
                }
            }
            return admin;
        }
        public Administrador ModificarAdmin(Administrador admin)
        {
            Administrador SegSSOMUsuario = null;
            HashSalt UserPass = EncriptacionHelper.Encripta(admin.PasswordText);
            admin.Password = UserPass.Hash;
            admin.Salt = UserPass.Salt;
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paAdministrador_Modificar", conexion))
                {
                    comando.CommandType = System.Data.CommandType.StoredProcedure;
                    comando.Parameters.AddWithValue("@idAdministrador", admin.Id);
                    comando.Parameters.AddWithValue("@password", admin.Password);
                    comando.Parameters.AddWithValue("@dni", admin.Dni);
                    comando.Parameters.AddWithValue("@nombre", admin.Nombre);
                    comando.Parameters.AddWithValue("@saltPassword", admin.Salt);
                    conexion.Open();
                    SqlDataReader reader = comando.ExecuteReader();
                    while (reader.Read())
                    {
                        SegSSOMUsuario = LlenarEntidad(reader);
                    }
                    conexion.Close();
                }
            }
            return SegSSOMUsuario;
        }
        public void EliminarAdmin(int idAdmin)
        {
            using (SqlConnection conexion = new SqlConnection(conf))
            {
                using (SqlCommand comando = new SqlCommand("paAdministrador_Eliminar", conexion))
                {
                    comando.CommandType = System.Data.CommandType.StoredProcedure;
                    comando.Parameters.AddWithValue("@idAdministrador", idAdmin);
                    conexion.Open();
                    comando.ExecuteNonQuery();
                    conexion.Close();
                }
            }
        }
    }
}
