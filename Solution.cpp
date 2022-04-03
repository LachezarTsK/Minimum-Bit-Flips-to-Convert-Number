
using namespace std;

class Solution {
    
public:
    int minBitFlips(int start, int goal) {
        int _xor = start ^ goal;
        int numberOfFlips = 0;
        while (_xor > 0) {
            ++numberOfFlips;
            _xor &= (_xor - 1);
        }
        return numberOfFlips;
    }
};
