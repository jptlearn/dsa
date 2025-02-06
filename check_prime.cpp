#include <iostream>
using namespace std;

int main() {
  int n;
  cout << "Enter a number: ";
  cin >> n;

  // Handle the edge cases
  if (n<=1) {
    cout << "Not a prime" << endl;
    return 0;
  }
  bool isPrime = true;
  // Check until square root of n
  for (int i = 2; i * i <= n; i++) {
    if (n%i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime){
    cout << n << " is a prime" << endl;
  } else {
    cout << n << " is not prime" << endl;
  }

  return 0;
}
