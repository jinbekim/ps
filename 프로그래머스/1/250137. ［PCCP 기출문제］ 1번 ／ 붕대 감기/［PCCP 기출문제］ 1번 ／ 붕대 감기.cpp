#include <string>
#include <vector>
#include <iostream>

using namespace std;

int heal(int current, int amount, int max) {
    return current + amount > max ? max : current + amount;
}

int solution(vector<int> bandage, int health, vector<vector<int>> attacks) {
    int succeed = 0;
    int currentHealth = health;
    int time = 0;
    int idx = 0;
    
    while(true) {
        if (idx  == attacks.size()) {
            break;
        }
        if(attacks[idx][0] == time) {
            currentHealth -= attacks[idx][1];
            idx++;
            succeed = 0;
            if (currentHealth <= 0) return -1;
        } else {
            currentHealth = heal(currentHealth, bandage[1], health);
            if (++succeed  == bandage[0]) {
                currentHealth = heal(currentHealth, bandage[2], health);
                succeed = 0;
            }   
        }
        ++time;
    }
    return currentHealth;
}