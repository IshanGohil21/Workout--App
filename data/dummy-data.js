import Category from "../models/Category";
import Exercise from "../models/Exercise";

export const CATEGORIES = [
    new Category('c1', 'Biceps', '#f5428d'),
    new Category('c2', 'Triceps', '#f54242'),
    new Category('c3', 'Abs', '#f5a442'),
    new Category('c4', 'Back', '#f5d142'),
    new Category('c5', 'Chest', '#368dff'),
    new Category('c6', 'Shoulders', '#41d95d'),
    new Category('c7', 'Calfs', '#9eecff'),
    new Category('c8', 'wings', '#f34324'),
];

export const exercise = [
    new Exercise(
        'E1',
        ['c1'],
        'Biceps',
        'https://manofmany.com/wp-content/uploads/2020/06/best-bicep-exercises.jpg',
        3,
        20,
        [
            'Bicep Curls',
            'Hammer Curls',
            'Reverse Curls',
            'Preacher Curls',
        ],
        30,
        'Pull',
        [5, 7.5, 10, 12, 15, 20]
    ),
    new Exercise(
        'E2',
        ['c2'],
        'Triceps',
        'https://blogscdn.thehut.net/wp-content/uploads/sites/478/2018/05/11115302/triceps-dip-min.jpg',
        3,
        20,
        [
            'Close Grip Bench Press',
            'Triceps Pushdown',
            'Triceps Kickbacks',
            'Parallel Bar Dip',
        ],
        30,
        'Push',
        [5, 7.5, 10, 12, 15, 20]
    ),
    new Exercise(
        'E3',
        ['c3'],
        'Abs',
        'http://bsmedia.business-standard.com/_media/bs/img/article/2017-11/10/full/1510305276-8424.jpg',
        6,
        20,
        [
            'Russian Twist',
            'Alternate Heel Touch',
            'Bicycle Crunches',
            'Shoulder Dog',
            'Hanging Crunches',
            'Alternating Bird Dog'
        ],
        10,
        'Cardio',
        ['No Requirement of Weights']
    ),
    new Exercise(
        'E4',
        ['c4'],
        'Back',
        'https://cimg2.ibsrv.net/cimg/www.fitday.com/693x350_85-1/522/back-20exercises-107522.jpg',
        3,
        20,
        [
            'Deadlift',
            'Barbell Arm Row',
            'Lat PullDown',
            'Straight Arm PullDown',
            'Barbell Shrugs'
        ],
        30,
        'Push',
        [30, 40 ,50, 60]
    ),
    new Exercise(
        'E5',
        ['c5'],
        'Chest',
        'https://cdn.prod.openfit.com/uploads/2019/10/29174504/chest-muscle-anatomy-960x480.jpg',
        3,
        20,
        [
            'Incline Bench Press',
            'Flat Bench Press',
            'Low Bench Press',
            'Incline Fly',
            'Low Fly',
            'Flat Fly'
        ],
        30,
        'Push',
        [5, 7.5, 10, 12, 15, 20]
    ),
    new Exercise(
        'E6',
        ['c6'],
        'Shoulders',
        'https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/static/optimized/rev-b48dca6/wp-content/uploads/2020/11/shoulder-workout-with-dumbbells-at-home.jpg',
        3,
        20,
        [
            'Shoulder Press Standing',
            'Shoulder Front Raise',
            'Shoulder Press Satnding With Barbell',
            'Shoulder Side Raise',
            'Reverse Pec Fly'
        ],
        30,
        'Pull',
        [5, 7.5, 10, 12, 15, 20]
    ),
    new Exercise(
        'E7',
        ['c7'],
        'Calfs',
        'https://manofmany.com/wp-content/uploads/2020/02/Best-Calf-Exercises.jpg',
        3,
        20,
        [
            'Stiff Leg Deadlift',
            'Leg Curl',
            'Seated Calf',
            'Standing Machine Calf Raise',
        ],
        30,
        'Legs',
        [5, 7.5, 10, 12, 15, 20]
    ),
    new Exercise(
        'E8',
        ['c8'],
        'Wings',
        'https://st3.depositphotos.com/8742290/33911/i/1600/depositphotos_339110732-stock-photo-bodybuilder-strong-man-pumping-up.jpg',
        3,
        20,
        [
            'Close Grip Bench Press',
            'Triceps Pushdown',
            'Triceps Kickbacks',
            'Parallel Bar Dip',
        ],
        30,
        'Pull',
        ['Pulls Ups']
    ),
];