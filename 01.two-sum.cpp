#include <vector>
#include <unordered_map>
#include <iostream>
#include <cassert>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map; // value -> index
        
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            
            if (map.find(complement) != map.end()) {
                return {map[complement], i};
            }
            
            map[nums[i]] = i;
        }
        
        return {};
    }
};

void runTests() {
    Solution solution;
    
    // Test case 1: Basic case
    vector<int> nums1 = {2, 7, 11, 15};
    vector<int> result1 = solution.twoSum(nums1, 9);
    assert(result1.size() == 2 && result1[0] == 0 && result1[1] == 1);
    
    // Test case 2: No solution
    vector<int> nums2 = {2, 7, 11, 15};
    vector<int> result2 = solution.twoSum(nums2, 100);
    assert(result2.empty());
    
    // Test case 3: Duplicate numbers
    vector<int> nums3 = {3, 3};
    vector<int> result3 = solution.twoSum(nums3, 6);
    assert(result3.size() == 2 && result3[0] == 0 && result3[1] == 1);
    
    cout << "All tests passed!" << endl;
}

int main() {
    runTests();
    return 0;
}