#include <iostream>
#include <set>
#include <algorithm>
using namespace std;

void solve(int arr[], int n) {
  int temp[n];
  for (int i = 1; i < n; i++) {
    temp[i - 1] = arr[i];
  }
  temp[n - 1] = arr[0];
  for (int i = 0; i < n; i++) {
    cout << temp[i] << " ";
  }
  cout << endl;
}

void optSolve(int arr[], int n) {
  int i = arr[0];
  for (int j = 1; j < n; j++) {
    arr[j - 1] = arr[j];

  }
  arr[n - 1] = i;
}

int main() {
  int n = 5;
  int arr[] = {1, 2, 3, 4, 5};
  optSolve(arr, n);
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout << endl;

  return 0;
}