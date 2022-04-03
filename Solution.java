
public class Solution {

    public int minBitFlips(int start, int goal) {
        int xor = start ^ goal;
        int numberOfFlips = 0;
        while (xor > 0) {
            ++numberOfFlips;
            xor &= (xor - 1);
        }
        return numberOfFlips;
    }
}
