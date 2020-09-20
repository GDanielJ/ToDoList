using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Dtos;
using ToDoList.Models;

namespace ToDoList.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<UserForRegisterDto, User>();
            CreateMap<User, UserToReturnDto>();
            CreateMap<ToDoListItem, ToDoListItemToReturnDto>();
            CreateMap<ToDoListItemToCreateDto, ToDoListItem>();
        }
    }
}
