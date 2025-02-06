
/*
Given a string s, find the length of the longest substring
without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let cadena = "";
    let contain = "";
    
    for (let i = 0; i < s.length; i++) {
        let index = contain.indexOf(s[i])
        
        if (index !== -1) {
            contain = contain.slice(index + 1)
        }
        contain += s[i]; 
        
        if (contain.length > cadena.length) {
            cadena = contain
        }

    }

    return cadena.length


};

lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("pwwkew")
lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyz")
lengthOfLongestSubstring("dvdf")