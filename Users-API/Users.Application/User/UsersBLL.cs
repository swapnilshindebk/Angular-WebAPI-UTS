using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Users.Application.Interfaces;
using Users.Domain.User;

namespace Users.Application.User
{
    public class UsersBLL
    {
        private IUserRepository _userRepository;
        public UsersBLL(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public List<Domain.User.User> GetUsers()
        {
            try
            {
                return _userRepository.GetUsers();
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }

        public void AddUser(Domain.User.User user)
        {
            try
            {
                _userRepository.AddUser(user);
            }
            catch(Exception exception)
            {
                throw exception;
            }
        }

        public bool UpdateUser(int userID, Domain.User.User newUser)
        {
            try
            {
                return _userRepository.UpdateUser(userID, newUser);
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }

    }
}
