using Autofac;
using Autofac.Integration.WebApi;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using Users.Application.Interfaces;
using Users.Application.User;
using Users.Data.Context;
using Users.Data.User;

namespace Users.WebAPI.IoC
{
    /// <summary>
    /// This class configures Autofac IoC Container for Web API 2.0
    /// </summary>
    public class AutofacConfig
    {
        private static IContainer _container;
        // Initialize Dependency Resolver
        public static void InitializeResolver(HttpConfiguration httpConfiguration)
        {
            _container = RegisterDependencies();

            httpConfiguration.DependencyResolver = new AutofacWebApiDependencyResolver(_container);
        }

        // Register all the Dependencies in the Container and return the same
        public static IContainer RegisterDependencies()
        {
            ContainerBuilder builder = new ContainerBuilder();

            // Register all the Web API controllers
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            // Context
            builder.RegisterType<AppDbContext>();

            // User Module
            builder.RegisterType<UsersBLL>();
            builder.RegisterType<UsersDAL>().As<IUserRepository>();

            // Build container
            return builder.Build();
        }
    }
}