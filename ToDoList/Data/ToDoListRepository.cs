﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Models;

namespace ToDoList.Data
{
    public class ToDoListRepository : IToDoListRepository
    {
        private readonly DataContext _context;

        public ToDoListRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();

            return users;
        }

        public async Task<IEnumerable<ToDoListItem>> GetItems(int id)
        {
            var items = await _context.ToDoListItems.Where(i => i.UserId == id).ToListAsync();

            return items;
        }
        public async Task<ToDoListItem> GetItem(int id)
        {
            return await _context.ToDoListItems.FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
