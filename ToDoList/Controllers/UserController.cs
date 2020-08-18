using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Data;

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IToDoListRepository _repo;
        private readonly IMapper _mapper;

        public UserController(IToDoListRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        //public async Task<IActionResult> GetUsers()
        //{
        //    var users = _repo
        //}
    }
}