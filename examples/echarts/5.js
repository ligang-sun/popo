var echartsOptions5 = {
    color: ["#108ee9","#7ec2f3","#3dbd7d","#ffce3d","#76cdd3"],
    textStyle: {
        color:"white"
    },
    angleAxis: {
        textStyle: {
            color:"#fff"
        }
    },
    radiusAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D'],
        z: 10,
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};