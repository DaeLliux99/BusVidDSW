using BusVidAPI.Modelos.Core;
using BusVidAPI.AccesoDatos.Core;
using System;
using System.Collections.Generic;
using System.Text;
namespace BusVidAPI.LogicaNegocio.Core
{
    public class AdministradorLN
    {
        public List<Administrador> ListarAdmins()
        {
            List<Administrador> lista = new List<Administrador>();
            try
            {
                AdministradorDA adminDA = new AdministradorDA();
                return adminDA.ListarAdmins();
            } catch (Exception ex)
            {
                string innerException = (ex.InnerException == null) ? "" : ex.InnerException.ToString();
                return lista;
            }
        }

        public Administrador ObtenerAdmin(string dni, string password)
        {
            try
            {
                return new AdministradorDA().ObtenerAdmin(dni, password);
            } 
            catch (Exception ex)
            {
                string innerException = (ex.InnerException == null) ? "" : ex.InnerException.ToString();
                return null;
            }
        }

        public Administrador ObtenerAdmin(string dni)
        {
            try
            {
                return new AdministradorDA().ObtenerAdmin(dni);
            }
            catch (Exception ex)
            {
                string innerException = (ex.InnerException == null) ? "" : ex.InnerException.ToString();
                return null;
            }
        }

        public Administrador InsertarAdmin(Administrador admin)
        {
            try
            {
                return new AdministradorDA().InsertarAdmin(admin);
            }
            catch (Exception ex)
            {
                string innerException = (ex.InnerException == null) ? "" : ex.InnerException.ToString();
                return null;
            }
        }
        public Administrador ModificarAdmin(Administrador admin)
        {
            try
            {
                return new AdministradorDA().ModificarAdmin(admin);
            }
            catch (Exception ex)
            {
                string innerException = (ex.InnerException == null) ? "" : ex.InnerException.ToString();
                return null;
            }
        }
        public void EliminarAdmin(int idAdmin)
        {
            try
            {
                AdministradorDA adminDA =  new AdministradorDA();
                adminDA.EliminarAdmin(idAdmin);
            }
            catch (Exception ex)
            {
                string innerException = (ex.InnerException == null) ? "" : ex.InnerException.ToString();
            }
        }
    }
}
