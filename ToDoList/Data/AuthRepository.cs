using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Models;

namespace ToDoList.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;

        public AuthRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<User> Login(string username, string password)
        {
            var userFromRepo = await _context.Users.FirstOrDefaultAsync(u => u.UserName == username);

            if (userFromRepo == null)
            {
                return null;
            }

            return userFromRepo;
        }

        public Task<User> Register(User user, string password)
        {
            throw new NotImplementedException();
        }
    }
}
