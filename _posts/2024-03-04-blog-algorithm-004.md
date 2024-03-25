---
title: 'Algorithm: Dijkstra'
date: 2024-03-04
permalink: /posts/2024/03/blog-algorithm-004/
author_profile: true
tags:
  - Point Cloud
  - Algorithm
---

Algorithm: Dijkstra

* Dijkstra算法是一种用于解决图中单源最短路径问题的经典算法，由荷兰计算机科学家Edsger W. Dijkstra在1956年提出。该算法可以应用于有向图或无向图，但边的权重必须为非负值。

Dijkstra算法的基本思想是从起始顶点开始，逐步扩展到其他顶点，找到从起始顶点到每个顶点的最短路径。算法通过维护一个距离数组（或称为距离表），记录从起始顶点到每个顶点的当前已知最短路径长度。同时，使用一个优先级队列（通常使用最小堆）来选择下一个扩展的顶点，以保证每次选择的都是距离起始顶点最近的顶点。

[^1]: <span style="font-size: 1.8em;">[Dijkstra E W. A Note on Two Problems in Connexion with Graphs[J]. Numerische Mathematik, 1959, 1: 269-271.](https://doi.org/10.1007/BF01386390)</span>