using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Data;
using ToDoList.Dtos;

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;

        public AuthController(IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        //[HttpPost("register")]
        //public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        //{
            
        //}
    }
}