<script setup lang="ts">
    import type { Montre } from "@/types";
    withDefaults (defineProps<Montre>(), {
    bracelet: "white",
    boitier: "white",
    ecran: "white",
    });
</script>




<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="300 0 700 768"><defs></defs>

<g id="bracelet"><path :fill="bracelet" class="cls-1" d="M550.41,73.36S602.58,53.07,649,54.52s95.65,15.94,95.65,15.94-29,271-26.09,349.28S746.06,727,746.06,727s-47.83,21.73-92.76,18.84-97.1-17.4-97.1-17.4S580.09,489.3,580.09,395.1,550.41,73.36,550.41,73.36Z"/><path :fill="bracelet" class="cls-1" d="M509.83,199.45S549,127,544.61,73.36c0,0,17.39-27.53,102.9-27.53S757.65,64.67,757.65,64.67s14.8,110.14,35.09,130.43c0,0-96,18.84-148.13,18.84S509.83,199.45,509.83,199.45Z"/><path :fill="bracelet" class="cls-1" d="M795.14,607.79s-41.87,70.92-39.57,124.67c0,0-18.43,26.85-103.87,23.59s-109.35-23-109.35-23S531.76,622.4,512.26,601.35c0,0,96.61-15.17,148.74-13.18S795.14,607.79,795.14,607.79Z"/></g>

<g id="boitier_rond" data-name="boitier rond"><path :fill="boitier" class="cls-2" d="M653.73,637.22a238.06,238.06,0,1,1,168.34-69.73A236.48,236.48,0,0,1,653.73,637.22Z"/><path :fill="boitier" d="M653.73,161.23a237.21,237.21,0,1,1-92.61,18.7,236.45,236.45,0,0,1,92.61-18.7m0-.25c-131.54,0-238.18,106.64-238.18,238.18S522.19,637.34,653.73,637.34,891.92,530.71,891.92,399.16,785.28,161,653.73,161Z"/><path :fill="boitier" class="cls-2" d="M653.73,619.54A220.37,220.37,0,1,1,809.57,555,218.94,218.94,0,0,1,653.73,619.54Z"/><path :fill="boitier" d="M653.73,178.9A219.58,219.58,0,1,1,568,196.21a219,219,0,0,1,85.73-17.31m0-.25c-121.78,0-220.5,98.73-220.5,220.51S532,619.67,653.73,619.67s220.51-98.73,220.51-220.51S775.52,178.65,653.73,178.65Z"/><circle class="cls-3" cx="653.73" cy="399.16" r="194.53"/></g>

<g id="ecran"><text class="cls-4" transform="translate(546.95 375.35)">1O:1O</text><text class="cls-5" transform="translate(560.15 267.61)"><tspan xml:space="preserve">Lun.  24 oct.</tspan></text><polyline class="cls-6" points="618.71 508.4 633.51 508.4 648.32 508.4"/><line class="cls-6" x1="634.46" y1="538.96" x2="634.22" y2="508.17"/><line class="cls-6" x1="653.41" y1="508.52" x2="653.65" y2="538.13"/><polyline class="cls-6" points="661.93 508.17 662.06 524.04 662.17 538.84"/><path :fill="ecran" class="cls-6" d="M677.09,508.52l-14.92,16.7,12.91,11.84a4.35,4.35,0,0,0,5,.83,3.57,3.57,0,0,0,1.53-2.13c.47-1.62,0-4-1.5-4.57a3,3,0,0,0-2.32.23,2,2,0,0,0-.68,1.85,2,2,0,0,0,1.9,1.54"/><polyline class="cls-6" points="619.08 544.11 633.89 544.11 648.69 544.11"/><line class="cls-6" x1="634.83" y1="574.67" x2="634.6" y2="543.87"/><path :fill="ecran" class="cls-6" d="M674.13,544.05V563.5l.12,14.81a3.86,3.86,0,0,1-1.31,3.67c-1.52,1.11-4.19.67-5.68-1.48-.68-2.22.4-4.13,1.68-4.42a3,3,0,0,1,2.46,1,1.85,1.85,0,0,1,.18,2.07,1.56,1.56,0,0,1-.77.6"/><path :fill="ecran" class="cls-6" d="M690.83,544.52l-16.58,20.17,17.41,15.36"/><polyline class="cls-6" points="648.55 573.89 657.67 543.7 667.98 572.83"/><path :fill="ecran" class="cls-7" d="M651.87,562.41l12.67.12"/><image width="50" height="50" transform="translate(721.62 428.16)" xlink:href="../../../Downloads/icons8-airpods-50.png"/><image width="48" height="48" transform="translate(543.07 425.56) scale(1.04)" xlink:href="../../../Downloads/icons8-batterie-faible-48.png"/><image width="60" height="60" transform="translate(632.5 424.4) scale(0.83)" xlink:href="../../../Downloads/icons8-commentaires-ios-16-glyph/icons8-commentaires-60.png"/></g></svg>
</template>