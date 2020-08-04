using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Users.Application.User;
using Users.Domain.User;

namespace Users.WebAPI.Controllers
{
    [EnableCors("http://localhost:4200", "*", "*")]
    public class UsersController : ApiController
    {
        private UsersBLL _usersBLL;
        public UsersController(UsersBLL usersBLL)
        {
            _usersBLL = usersBLL;
        }

        [HttpGet]
        public IHttpActionResult GetUsers()
        {
            try
            {
                List<User> usersList = _usersBLL.GetUsers();
                return Ok(usersList);
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

        [HttpPost]
        public IHttpActionResult AddUser([FromBody]User newUser)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                _usersBLL.AddUser(newUser);
                return Ok("User created successfully!");
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

        [HttpPut]
        public IHttpActionResult UpdateUser(int id, [FromBody]User newUser)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            if (id != newUser.UserID)
                return BadRequest();

            try
            {
                bool isUpdated = _usersBLL.UpdateUser(id, newUser);

                if (isUpdated == true)
                    return Ok("User Updated successfully!");
                else
                    return NotFound();
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

        [HttpDelete]
        public IHttpActionResult DeleteUser(int id)
        {
            if (id == 0)
                return BadRequest("Invalid User ID");

            try
            {
                bool isDeleted = _usersBLL.DeleteUser(id);
                if (isDeleted == true)
                    return Ok("User Deleted Successfully!");
                else
                    return NotFound();
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

    }
}
