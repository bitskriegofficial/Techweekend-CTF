#include<stdio.h>

int main(void){
	int i;
	char input[12];
    printf("Enter Password\n");
	for(i=0;i<12;i++){
        scanf("%c",&input[i]);
	}
	if(strcmp(input,"th15_1s_a_l1t_w33k3nd") == 0){
		printf("You Got It\n");
	}
	else{
		printf("Wrong Password\n");
	}
}
