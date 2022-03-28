using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface ICounterService
    {
        public int IncrementNumber(int n);
        public int DecrementNumber(int n);
        public int ResetCounter();
        public int getNumber();
    }
}