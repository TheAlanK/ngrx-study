using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Interfaces;

namespace API.Services
{
    public class CounterService: ICounterService
    {

        private static int _number = 0;
        public CounterService() {
        }

        public int IncrementNumber(int n) {
            _number = _number + n;
            return _number;
        }

        public int DecrementNumber(int n) {
            _number = _number - n;
            return _number;
        }

        public int getNumber() {
            return _number;
        }

        public int ResetCounter() {
            return _number = 0;
        }


    }
}