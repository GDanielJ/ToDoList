﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Data;
using ToDoList.Dtos;
using ToDoList.Models;

namespace ToDoList.Controllers
{
    [Route("api/user/{userId}/[controller]")]
    [ApiController]
    public class ListController : ControllerBase
    {
        private readonly IToDoListRepository _repo;
        private readonly IMapper _mapper;

        public ListController(IToDoListRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems(int userId)
        {
            var items = await _repo.GetItems(userId);

            var itemsToReturn = _mapper.Map<IEnumerable<ToDoListItemToReturnDto>>(items);

            return Ok(itemsToReturn);
        }
    }
}