#include <iostream>
using namespace std;

class Solution
{
public:
  bool checkOverlap(int radius, int xCenter, int yCenter, int x1, int y1, int x2, int y2)
  {
    x1 -= xCenter;
    x2 -= xCenter;
    y1 -= yCenter;
    y2 -= yCenter;
    int minx = x1 * x2 > 0 ? min(x1 * x1, x2 * x2) : 0;
    int miny = y1 * y2 > 0 ? min(y1 * y1, y2 * y2) : 0;
    return minx + miny <= radius * radius;
  }
};


int main(){
  Solution p;
  bool isOver = p.checkOverlap(1,0,0,1,-1,3,1);
  string res = isOver ? "true" : "false"; 
  cout<<res<<endl;
  system("pause");
  return 0;
}
